import React from 'react';
import { 
    MergeIcon, SplitIcon, CompressIcon, WordIcon, ExcelIcon, PowerpointIcon, JpgIcon, 
    JpgToPdfIcon, ProtectIcon, UnlockIcon, RotateIcon, EditIcon, SignatureIcon, ResizeIcon
} from './components/icons';

export interface Tool {
  id: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export const TOOLS: Tool[] = [
  { id: 'merge-pdf', title: 'Merge PDF', description: 'Combine PDFs in the order you want with the easiest PDF merger available.', Icon: MergeIcon, color: 'text-red-500' },
  { id: 'split-pdf', title: 'Split PDF', description: 'Separate one page or a whole set for easy conversion into independent PDF files.', Icon: SplitIcon, color: 'text-orange-500' },
  { id: 'compress-pdf', title: 'Compress PDF', description: 'Reduce file size while optimizing for maximal PDF quality.', Icon: CompressIcon, color: 'text-yellow-500' },
  { id: 'pdf-to-word', title: 'PDF to Word', description: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.', Icon: WordIcon, color: 'text-blue-700' },
  { id: 'pdf-to-powerpoint', title: 'PDF to PowerPoint', description: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.', Icon: PowerpointIcon, color: 'text-red-600' },
  { id: 'pdf-to-excel', title: 'PDF to Excel', description: 'Pull data straight from PDFs into Excel spreadsheets in a few short clicks.', Icon: ExcelIcon, color: 'text-green-700' },
  { id: 'pdf-to-jpg', title: 'PDF to JPG', description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.', Icon: JpgIcon, color: 'text-indigo-500' },
  { id: 'jpg-to-pdf', title: 'JPG to PDF', description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.', Icon: JpgToPdfIcon, color: 'text-purple-500' },
  { id: 'resize-jpg', title: 'Resize JPG', description: 'Resize JPG, PNG, SVG or GIF images with our easy to use image resizer.', Icon: ResizeIcon, color: 'text-yellow-600' },
  { id: 'edit-pdf', title: 'Edit PDF', description: 'Add text, shapes, comments and highlights to a PDF file.', Icon: EditIcon, color: 'text-teal-500' },
  { id: 'add-signature', title: 'Sign PDF', description: 'Sign yourself or send a signature request to others.', Icon: SignatureIcon, color: 'text-cyan-500' },
  { id: 'protect-pdf', title: 'Protect PDF', description: 'Protect PDF files with a password to prevent unauthorized access.', Icon: ProtectIcon, color: 'text-gray-600' },
  { id: 'unlock-pdf', title: 'Unlock PDF', description: 'Remove PDF password security, giving you the freedom to use your PDFs as you want.', Icon: UnlockIcon, color: 'text-gray-500' },
  { id: 'rotate-pdf', title: 'Rotate PDF', description: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!', Icon: RotateIcon, color: 'text-pink-500' },
];