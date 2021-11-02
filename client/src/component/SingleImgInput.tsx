import { useState } from "react";
import styled from "styled-components";
import { Nav } from "./Nav";

const UploadButton = styled.label`
  padding: 5px;
  background-color: aqua;
`;

const UploadInput = styled.input`
  display: none;
`;

export const SingleImgInput = () => {
  const [file, setFile] = useState<File | undefined>();
  const uploadFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Nav />
      <UploadButton htmlFor="imgInput">upload img</UploadButton>
      <UploadInput
        id="imgInput"
        type="file"
        onChange={(e) => uploadFileChange(e)}
      />
      {file ? <div>{file.name}</div> : null}
    </>
  );
};
