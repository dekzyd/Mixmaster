import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          defaultValue="vodka"
          className="form-input"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
