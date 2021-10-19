import React, { useState } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const normalizeFile = (fileContent: string) => {
  const splittedContent = fileContent.split('\n');

  if (!splittedContent) {
    return undefined;
  }

  const content = splittedContent.map((text) => {
    if (_.isEmpty(text)) {
      return;
    }

    return {
      type: Number(text.substring(0, 1)),
      date: `${text.substring(1, 5)}-${text.substring(5, 7)}-${text.substring(7, 9)}`,
      value: Number(text.substring(9, 19)) / 100,
      cpf: text.substring(19, 30),
      card: text.substring(30, 42),
      hour: `${text.substring(42, 44)}:${text.substring(44, 46)}:${text.substring(46, 48)}`,
      owner: text.substring(48, 62),
      name: text.substring(62, 81),
    };
  });

  return _.without(content, undefined);
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const [fileContent, setFileContent] = useState<string>();
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    if (!uploadedFiles) {
      return;
    }

    if (!fileContent) {
      return;
    }

    const normalizedContent = normalizeFile(fileContent);

    if (!normalizedContent) {
      return;
    }

    try {
      const transactions = await api.post('/transactions', normalizedContent);
      console.log(transactions);
      history.push('/');
    } catch (error) {
      history.push('/');
    }
  }

  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    const file = uploadFiles[0];

    const reader = new FileReader();
    reader.readAsText(file.file);
    reader.addEventListener('load', (e: any) => setFileContent(e.target.result));

    setUploadedFiles(uploadFiles);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos txt
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
