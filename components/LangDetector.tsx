import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// ACTIONS
import { handleUILanguage } from "../redux/actions/uiActions";

const LangDetector: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale === "ru") {
      dispatch(handleUILanguage("ru"));
    } else {
      dispatch(handleUILanguage("en"));
    }
  }, [dispatch, locale]);

  return null;
};

export default LangDetector;
