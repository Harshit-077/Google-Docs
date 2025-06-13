"use client"
import { Ruler } from './ruler'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TaskList from '@tiptap/extension-task-list'
import TableRow from '@tiptap/extension-table-row'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import TableCell from '@tiptap/extension-table-cell'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import ImageResize from 'tiptap-extension-resize-image'
import { useEditor, EditorContent } from '@tiptap/react'
import TableHeader from '@tiptap/extension-table-header'
import { useEditorStore } from '@/store/use-editor-store'
import { FontSizeExtension } from '@/extensions/font-size'
import { LineHeightExtension } from '@/extensions/line-height'
import { useLiveblocksExtension } from '@liveblocks/react-tiptap'
import { Threads } from './threads'

export const Editor = () => {
    const liveblocks = useLiveblocksExtension();
  const { setEditor } = useEditorStore();
    const editor = useEditor({
        immediatelyRender:false,
      onCreate({editor}) {
          setEditor(editor);
      },
      onDestroy() {
          setEditor(null);
      },
      onUpdate({ editor }) {
          setEditor(editor);
      },
      onSelectionUpdate({ editor }) {
          setEditor(editor);
      },
      onTransaction({ editor }) {
          setEditor(editor);
      },
      onFocus({ editor }) {
          setEditor(editor);
      },
      onBlur({ editor }) {
          setEditor(editor);
      },
      onContentError({ editor }) {
          setEditor(editor);
      },
        editorProps: {
            attributes: {
                style: 'padding-left: 56px; padding-right: 56px;',
                class: 'focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text',
            },
        },
        extensions: [
            Color,
            Table,
            TaskList,
            TableRow,
            TextStyle,
            TableCell,
            Underline,
            liveblocks,
            StarterKit.configure({
                history: false,
            }),
            FontFamily,
            TableHeader,
            ImageResize,
            FontSizeExtension,
            LineHeightExtension,
            TextAlign.configure({
                types: ['heading','paragraph']
            }),
            Highlight.configure({
                multicolor: true,
            }),
            Image,
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
            }),
            TaskItem.configure({
                nested: true,
            }),
        ],
      })
    return (
        <div className='size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible'>
            <Ruler />
            <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
            <EditorContent editor={editor} />
            <Threads editor={editor} />
            </div>
        </div>
    );
}