import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Document, Page } from 'react-pdf'

export default function Pdf({ src }: { src: string }) {
  const [numPages, setNumPages] = useState<number>(1)
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div className="pdf-container">
      <div className="row mx-3 mb-1">
        <Button
          className="col"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </Button>
        <span className="col pt-2">
          Page {pageNumber} of {numPages}
        </span>
        <Button
          className="col"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
      <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  )
}
