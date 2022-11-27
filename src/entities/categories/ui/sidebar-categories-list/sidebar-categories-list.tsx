import React, { useCallback } from "react";
import { useList, useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { SidebarCategoryItem } from "../sidebar-category-item/sidebar-category-item";

import { $categories, $isLoading } from "entities/categories/model";

import st from "./styles.module.scss";
import { Loader } from "shared/ui/loader/loader";

const SidebarCategoriesList = React.memo(() => {
  const navigate = useNavigate();

  const navigateTo = useCallback(
    (id: string) => navigate(`${routePaths.privateNavigation.CATEGORY}${id}`),
    []
  );

  const list = useList($categories, (category) => (
    <SidebarCategoryItem
      {...category}
      key={category.id}
      onClick={() => navigateTo(category.id)}
    />
  ));

  const isLoading = useStore($isLoading);

  if (!isLoading) {
    return <ul className={st.list}>{list}</ul>;
  } else {
    return <Loader />;
  }
});

export default SidebarCategoriesList;
