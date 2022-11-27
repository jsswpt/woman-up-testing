import React, { useCallback } from "react";
import { useList } from "effector-react";
import { $categories } from "entities/categories/model";
import { useNavigate } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { SidebarCategoryItem } from "../sidebar-category-item/sidebar-category-item";

import st from "./styles.module.scss";

const SidebarCategoriesList = React.memo(() => {
  const navigate = useNavigate();

  const navigateTo = useCallback(
    (id: string) => navigate(`${routePaths.publicNavigation.CATEGORY}${id}`),
    []
  );

  const list = useList($categories, (category) => (
    <SidebarCategoryItem
      {...category}
      key={category.id}
      onClick={() => navigateTo(category.id)}
    />
  ));
  return <ul className={st.list}>{list}</ul>;
});

export default SidebarCategoriesList;
