import { GetCategoriesQuery, Maybe } from '@src/generated/graphql';
import urls from '@src/utils/urls';
import { useRouter } from 'next/router';

const useCategorySlug = (categoriesData: Maybe<GetCategoriesQuery>) => {
  const router = useRouter();
  const { categorySlug } = router.query;
  if (typeof categorySlug === 'string') {
    return categorySlug;
  } else if (router.pathname === urls.home.href) {
    const defaultCategory = categoriesData?.categories[0];
    return defaultCategory?.slug;
  }
  return null;
};

export default useCategorySlug;
