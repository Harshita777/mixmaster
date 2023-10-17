import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <form className="form">
        <input
          type="search"
          className="form-input"
          defaultValue={searchTerm}
          name="search"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
