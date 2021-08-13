import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// ACTIONS
import { handleUILanguage } from "../redux/actions/uiActions";

function LangDetector() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale === "ru") {
      dispatch(handleUILanguage("ru"));
    } else {
      dispatch(handleUILanguage("en"));
    }
  }, []);

  return <div></div>;
}

export default LangDetector;
