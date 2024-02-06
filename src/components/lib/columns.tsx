import { Column } from 'react-table';


const columns: Column<{ generateArticle: string; website: string; niche: string; selectBox: string }>[] = [
  { Header: 'Generate Article', accessor: 'generateArticle' },
  { Header: 'Website', accessor: 'website' },
  { Header: 'Niche', accessor: 'niche' },
  { Header: 'Select Box', accessor: 'selectBox' },
];
export default columns;
