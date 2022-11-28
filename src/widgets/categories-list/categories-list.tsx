import React, { Suspense } from "react";
import { useList, useStore } from "effector-react";
import { $categories, $isLoading } from "entities/categories";
import { SidebarCategoryItem } from "entities/categories/ui/sidebar-category-item/sidebar-category-item";
import { IconButton } from "shared/ui/button/icon-button";

import st from "./styles.module.scss";
import { MdEdit, MdRemove } from "react-icons/md";
import { setCurrentChild, toggleIsOpen } from "entities/modal";
import RemoveCategoryFeature from "feature/remove-category-feature/ui/remove-category-feature";
import { Loader } from "shared/ui/loader/loader";

const EditCategoryFeature = React.lazy(
  () => import("feature/edit-category-feature/ui/edit-category-feature")
);

const CategoriesList = () => {
  const isLoading = useStore($isLoading);
  const categoriesList = useList($categories, (category) => (
    <li key={category.id} className={st.item}>
      <div className={st.buttons_wrap}>
        <IconButton
          size="small"
          color="warning"
          variant="outlined"
          onClick={() => {
            setCurrentChild(
              <Suspense>
                <EditCategoryFeature categoryId={category.id} />
              </Suspense>
            );
            toggleIsOpen(true);
          }}
        >
          <MdEdit />
        </IconButton>
        <IconButton
          size="small"
          color="danger"
          variant="outlined"
          onClick={() => {
            setCurrentChild(
              <Suspense>
                <RemoveCategoryFeature categoryId={category.id} />
              </Suspense>
            );
            toggleIsOpen(true);
          }}
        >
          <MdRemove />
        </IconButton>
      </div>
      <div className={st.link}>
        <SidebarCategoryItem id={category.id} title={category.name} />
      </div>
    </li>
  ));

  if (isLoading) {
    return <Loader />;
  }
  return <ul className={st.list}>{categoriesList}</ul>;
};

export default CategoriesList;
