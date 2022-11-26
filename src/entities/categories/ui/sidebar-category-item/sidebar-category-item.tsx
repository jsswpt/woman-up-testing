import { Category } from "shared/api/internal/types/category.type";

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
