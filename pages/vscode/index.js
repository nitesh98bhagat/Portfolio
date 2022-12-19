import React, { useState } from "react";
import { SiVisualstudiocode } from "react-icons/si";
import { MdMinimize, MdCancel, MdOutlineMoreHoriz } from "react-icons/md";
import {
  VscChromeRestore,
  VscChromeClose,
  VscSourceControl,
  VscWarning,
  VscSearch,
  VscCloudUpload,
  VscFiles,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
  VscChevronDown,
  VscCollapseAll,
  VscNewFile,
  VscNewFolder,
  VscRefresh,
} from "react-icons/vsc";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

function Vscode() {
  return (
    <div className="flex flex-col h-[100vh]">
      <MenuHeader />
      <WorkSpace />
      <MenuFooter />
    </div>
  );
}

export default Vscode;

function WorkSpace() {
  const [code, setCode] = useState(`
  import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; 


function App() {  
  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}
  `);
  return (
    <div class="flex flex-grow bg-slate-900">
      {/* sidebar */}
      <div className="flex flex-col  text-2xl text-slate-400 space-y-4 bg-slate-900 p-3">
        <VscFiles />
        <VscSearch />
        <VscSourceControl />
        <VscDebugAlt />
        <VscExtensions />
        <div className="flex-1"></div>
        <VscAccount />
        <VscSettingsGear />
      </div>
      {/* menu bar */}
      <div className="flex flex-col w-1/5 text-3xl text-slate-200 bg-slate-800">
        <div className="flex p-1 justify-between">
          <p className="text-sm font-bold">File Explorer</p>
          <MdOutlineMoreHoriz size={18} />
        </div>

        {/* expandable */}
        <div className="flex text-sm items-center justify-start bg-slate-700 px-1">
          <VscChevronDown />
          <p className="px-1">Folder in use</p>
          <div className="flex space-x-2 ml-auto">
            <VscNewFile />
            <VscCollapseAll />
            <VscRefresh />
            <VscNewFolder />
          </div>
        </div>
        <p className="text-sm px-5 bg-slate-600">index.js</p>
      </div>
      {/* Editor */}
      <div className="flex flex-col w-full text-white">
        {/* tab bar */}
        <div className="flex  bg-slate-800 w-full">
          <p className="text-white bg-gray-900 px-5 py-1 text-sm border-r border-slate-700">
            index.js
          </p>
          <p className="text-white  px-5 py-1 text-sm border-r border-black">
            index.js
          </p>
        </div>
        {/* file editor- */}
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          className="flex-grow"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>
    </div>
  );
}

function MenuHeader() {
  return (
    <div className="flex p-1 space-x-3 item-center text-slate-300 bg-slate-800 border-b border-slate-900">
      <SiVisualstudiocode className="text-blue-700" />
      <>
        {[
          "File",
          "Edit",
          "Selection",
          "View",
          "Go",
          "Run",
          "Terminal",
          "help",
        ].map((e) => (
          <p key={e} className="text-xs">{e}</p>
        ))}
      </>
      <div className="flex-1 text-center text-xs">Index.js</div>
      <div className="flex flex-row space-x-3">
        <MdMinimize />
        <VscChromeRestore />
        <VscChromeClose />
      </div>
    </div>
  );
}

function MenuFooter() {
  return (
    <div className="flex p-1 space-x-3 item-center bg-slate-700 text-slate-400 text-sm">
      <div className="flex flex-row space-x-3">
        <VscSourceControl />
        <VscCloudUpload />
        <VscWarning />
        <MdCancel />
      </div>
      <div className="flex-grow"></div>
      <div className="flex space-x-3">
        {["Ln 52", "Col 15", "Space: 4", "UTF-8", "CRLF"].map((e) => (
          <p key={e} className="text-xs ">{e}</p>
        ))}
      </div>
    </div>
  );
}
