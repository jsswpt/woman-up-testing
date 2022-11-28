import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import { Category } from "shared/api/internal/category/category.type";
import { routePaths } from "shared/api/internal/consts/route-paths";

import st from "./styles.module.scss";

interface SidebarCategoryItemProps {
  id: string;
  title: string;
}

export const SidebarCategoryItem = (props: SidebarCategoryItemProps) => {
  const { categoryId } = useParams();
  return (
    <Link
      to={routePaths.privateNavigation.CATEGORY + props.id}
      className={classNames(st.link, {
        [st.active]: props.id === categoryId,
      })}
    >
      <p>{props.title}</p>
    </Link>
  );
};
