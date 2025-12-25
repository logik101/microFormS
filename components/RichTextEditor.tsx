
import React, { useEffect, useRef } from 'react';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    className?: string;
    height?: string;
    toolbar?: boolean;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ 
    value, 
    onChange, 
    label, 
    className = "", 
    height = "h-64",
    toolbar = true
}) => {
    const editorRef = useRef<HTMLDivElement>(null);

    const execCommand = (command: string, arg: string | undefined = undefined) => {
        document.execCommand(command, false, arg);
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
        editorRef.current?.focus();
    };

    useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            // Only update innerHTML if it differs and we aren't focused 
            // to prevent cursor jumping issues during typing
            if (document.activeElement !== editorRef.current) {
                editorRef.current.innerHTML = value;
            }
        }
    }, [value]);

    return (
        <div className={`flex flex-col ${className}`}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent bg-white shadow-sm">
                {toolbar && (
                    <div className="flex flex-wrap items-center gap-1 bg-gray-50 border-b border-gray-300 p-2">
                        <button type="button" onClick={() => execCommand('bold')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-sm w-8" title="Bold">B</button>
                        <button type="button" onClick={() => execCommand('italic')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic text-sm w-8" title="Italic">I</button>
                        <button type="button" onClick={() => execCommand('underline')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 underline text-sm w-8" title="Underline">U</button>
                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                        <button type="button" onClick={() => execCommand('formatBlock', 'H2')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-sm" title="Heading 2">H2</button>
                        <button type="button" onClick={() => execCommand('formatBlock', 'H3')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-sm" title="Heading 3">H3</button>
                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                        <button type="button" onClick={() => execCommand('insertOrderedList')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-sm w-8" title="Ordered List">1.</button>
                        <button type="button" onClick={() => execCommand('insertUnorderedList')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-sm w-8" title="Bullet List">•</button>
                        <div className="w-px h-4 bg-gray-300 mx-1"></div>
                        <button type="button" onClick={() => execCommand('justifyLeft')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-sm w-8" title="Align Left">L</button>
                        <button type="button" onClick={() => execCommand('justifyCenter')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-sm w-8" title="Align Center">C</button>
                        <button type="button" onClick={() => execCommand('justifyRight')} className="p-1.5 hover:bg-gray-200 rounded text-gray-700 text-sm w-8" title="Align Right">R</button>
                    </div>
                )}
                <div
                    ref={editorRef}
                    contentEditable
                    onInput={(e) => onChange(e.currentTarget.innerHTML)}
                    onBlur={(e) => onChange(e.currentTarget.innerHTML)}
                    className={`p-4 outline-none overflow-y-auto prose prose-sm max-w-none ${height}`}
                />
            </div>
        </div>
    );
};
