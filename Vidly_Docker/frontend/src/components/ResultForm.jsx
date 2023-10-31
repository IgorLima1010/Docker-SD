import React, { useEffect, useState } from "react";
import Input from "./Input";

function ResultForm({onSearchTitle, searchResult}) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => setTitle(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    onSearchTitle(title);
  };
  var response = ""
  if(searchResult.movie != null && searchResult.serie){
    response = `${searchResult.movie.title} está nós dois.`;
  }else if (searchResult.movie != null){
    response = `The  movie${searchResult.movie.title} is an action movie.`;
  }else if(searchResult.serie){
    response = `The movie ${searchResult.serie.title} is a horror movie.`;
  }else{
    response = `${title} não tem em nenhum dos dois.`;
  }

  useEffect(()=>onSearchTitle(title), [title]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
        aria-label="Database Search"
        onChange={handleChange}
        placeholder="Search for a movie"
        type="text"
        />
      </form>
      <h3>
        {response}
      </h3>
    </div>
  )
}

export default ResultForm;