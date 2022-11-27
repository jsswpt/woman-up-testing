import { Category } from "shared/api/internal/category/category.type";

interface SidebarCategoryItemProps extends Category {
  onClick?: () => void;
}

export const SidebarCategoryItem = (props: SidebarCategoryItemProps) => {
  return (
    <li
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
    >
      <p>{props.name}</p>
    </li>
  );
};
