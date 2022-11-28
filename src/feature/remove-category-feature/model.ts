import { useCallback } from "react";
import { createEffect, createEvent, sample } from "effector";
import { $categories } from "entities/categories";
import { removeCategory } from "shared/api/internal/category/category";
import { useNavigate, useParams } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";

export const useRemoveCategory = (categoryId: string) => {
  const navigate = useNavigate();
  const params = useParams();

  const removeCategory = useCallback(() => {
    onSubmit(categoryId);
    if (params.categoryId! === categoryId) {
      navigate(routePaths.privateNavigation.HOME);
    }
  }, []);

  return { removeCategory };
};

const removeCategoryFx = createEffect(removeCategory);

const onSubmit = createEvent<string>();
const removeCategoryEvent = createEvent<string>();

sample({
  clock: onSubmit,
  target: removeCategoryFx,
});

sample({
  clock: removeCategoryFx.doneData,
  target: removeCategoryEvent,
});

sample({
  clock: removeCategoryEvent,
  source: $categories,
  fn: (categories, id) => {
    return categories.filter((item) => item.id !== id);
  },
  target: $categories,
});
