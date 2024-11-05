"use client";
import React, { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = () => {
  const [value, setValue] = useState("");

  const editorRef = useRef(null);
  const [description, setDescription] = useState("")
  const log = (e) => {
    e.preventDefault()
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey="e00j5436b1lxgewr9k55grn7kfijv4e3wkalgy8q8l3c7wss"
        init={{
          plugins: [
            // Core editing features
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "image",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
            // Your account includes a free trial of TinyMCE premium features
            // Try the most popular premium features until Oct 31, 2024:
            "checklist",
            "mediaembed",
            "casechange",
            "export",
            "formatpainter",
            "pageembed",
            "a11ychecker",
            "tinymcespellchecker",
            "permanentpen",
            "powerpaste",
            "advtable",
            "advcode",
            "editimage",
            "advtemplate",
            "ai",
            "mentions",
            "tinycomments",
            "tableofcontents",
            "footnotes",
            "mergetags",
            "autocorrect",
            "typography",
            "inlinecss",
            "markdown",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue="Welcome to TinyMCE!"
      />
      <button onClick={(e) => log(e)}>Log editor content</button>
    </>
  );
};

export default TextEditor;
// {/* <div className="h-64 overflow-y-auto border border-gray-300 rounded-lg">

//      <div className="h-full">
//        Write here
//        <ReactQuill
//          theme="snow"
//          value={value}
//          onChange={setValue}
//          className="text-black dark:text-white "
//        ></ReactQuill>
//      </div>
//      {/* <div dangerouslySetInnerHTML={{ __html: value }}></div> */}
//      <Button
//        type="submit"
//        variant="contained"
//        color="primary"
//        onClick={handleSave}
//      >
//        Save
//      </Button>
//    </div> */}
