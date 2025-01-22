// components/custom-editor.js
"use client"; // only in App Router

import React from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";

const CustomEditor = () => {
  const cloud = useCKEditorCloud({
    version: "44.1.0",
    premium: true,
  });

  if (cloud.status === "error") {
    return <div>Error!</div>;
  }

  if (cloud.status === "loading") {
    return <div>Loading...</div>;
  }

  const {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Link,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    SourceEditing,
  } = cloud.CKEditor;

  const { FormatPainter } = cloud.CKEditorPremiumFeatures;

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        licenseKey: process.env.NEXT_PUBLIC_LICENSE_KEY,
        plugins: [
          Essentials,
          Paragraph,
          Bold,
          Italic,
          Underline,
          Link,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          SourceEditing,
          FormatPainter,
        ],
        toolbar: [
          "bold",
          "italic",
          "underline",
          "link",
          "imageUpload",
          "sourceEditing",
        ],
        image: {
          toolbar: [
            "imageStyle:full",
            "imageStyle:side",
            "|",
            "imageTextAlternative",
          ],
        },
      }}
      onReady={(editor) => {
        console.log("Editor is ready!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />
  );
};

export default CustomEditor;
