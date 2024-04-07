import useGlobalStore from "@/store";
import styles from "./style.module.css";
import { CatalogAPI, CategoriesAPI } from "@/api";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import ButtonDefault from "@/ui/Buttons/Default";
import { useCallback, useEffect, useState } from "react";
import { ICatalog } from "@/types";
import Select from "@/ui/Select";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase";
import { CheckIcon, ImageIcon } from "@/ui/Icons";

const Category = () => {
  const categoryData = useGlobalStore((state) => state.categoryData);
  const changeCategoryData = useGlobalStore(
    (state) => state.changeCategoryData
  );
  const changeModal = useGlobalStore((state) => state.changeModal);
  const modalMode = useGlobalStore((state) => state.modalMode);
  const [catalog, setCatalog] = useState<ICatalog[]>([]);
  const [image, setImage] = useState<any>([]);

  const getAllCatalogs = useCallback(async () => {
    const catResult = await CatalogAPI.getAll();
    setCatalog(catResult);
  }, []);

  useEffect(() => {
    getAllCatalogs();
  }, []);

  function handleInput(
    type: "title" | "text" | "seodescription" | "seotitle",
    value: string
  ) {
    if (categoryData !== null) {
      if (type === "title")
        changeCategoryData({
          id: categoryData?.id,
          data: { ...categoryData?.data, title: value },
        });
      if (type === "text")
        changeCategoryData({
          id: categoryData?.id,
          data: { ...categoryData?.data, text: value },
        });
      if (type === "seodescription")
        changeCategoryData({
          id: categoryData?.id,
          data: {
            ...categoryData?.data,
            seo: { ...categoryData.data.seo, description: value },
          },
        });
      if (type === "seotitle")
        changeCategoryData({
          id: categoryData?.id,
          data: {
            ...categoryData?.data,
            seo: { ...categoryData.data.seo, title: value },
          },
        });
    }
  }

  function setCategory(value: string) {
    if (categoryData !== null) {
      changeCategoryData({
        id: categoryData?.id,
        data: { ...categoryData?.data, category: value },
      });
    }
  }

  async function updateItem() {
    if (categoryData !== null) {
      await CategoriesAPI.update(categoryData?.id, categoryData);
      changeModal(false);
    }
  }

  async function CreateItem() {
    if (categoryData !== null) {
      await CategoriesAPI.create(categoryData);
      changeModal(false);
    }
  }

  const loadImage = useCallback(
    async (path: string) => {
      if (path !== "") {
        const imageRef = ref(storage, path);

        try {
          const url = await getDownloadURL(imageRef);
          if (categoryData !== null) {
            changeCategoryData({
              id: categoryData?.id,
              data: { ...categoryData?.data, image: url },
            });
          }
        } catch (error) {
          console.error("Error getting download URL: ", error);
        }
      }
    },
    [categoryData]
  );

  useEffect(() => {
    if (image.length !== 0) {
      const imageRef = ref(storage, `images/${Date.now()}/${image[0]?.name}`);

      uploadBytes(imageRef, image[0]).then(() => {
        loadImage(imageRef.fullPath);
      });
    }
  }, [image, loadImage]);

  return (
    <div className={styles.Box} onClick={(e) => e.stopPropagation()}>
      <div className={styles.Row}>
        <h2>{categoryData?.data.title}</h2>
      </div>

      <div className={styles.List}>
        <Input
          label="Название"
          onChange={(e) => handleInput("title", e.target.value)}
          type="text"
          value={categoryData?.data.title || ""}
        />
        <Select
          array={catalog}
          value={categoryData?.data.category || ""}
          setValue={setCategory}
        />
        <Textarea
          label="Описание"
          onChange={(e) => handleInput("text", e.target.value)}
          value={categoryData?.data.text || ""}
        />

        <h3>Фото</h3>
        <input
          className={styles.UploadInput}
          id="upload"
          type="file"
          onChange={(e) => setImage(e.target.files)}
        />
        <label htmlFor="upload" className={styles.Button}>
          {image.length !== 0 ? (
            <>
              <CheckIcon className={styles.Icon} /> Изображение загружено
            </>
          ) : (
            <>
              <ImageIcon className={styles.Icon} /> Загрузить изображение
            </>
          )}
        </label>

        <h3>SEO</h3>
        <Input
          label="Заголовок"
          onChange={(e) => handleInput("seotitle", e.target.value)}
          type="text"
          value={categoryData?.data.seo.title || ""}
        />
        <Textarea
          label="Описание"
          onChange={(e) => handleInput("seodescription", e.target.value)}
          value={categoryData?.data.seo.description || ""}
        />
      </div>

      <div className={styles.ButtonCreate}>
        {modalMode === "AddCatagories" ? (
          <ButtonDefault onClick={() => CreateItem()}>Создать</ButtonDefault>
        ) : (
          <ButtonDefault onClick={() => updateItem()}>Сохранить</ButtonDefault>
        )}
      </div>
    </div>
  );
};

export default Category;
