import React from "react";
import Image from "next/image";

interface ImageBlobProps {
  quoteReceived: String | null;
  blobUrl: string | null;
}

const ImageBlob = ({ blobUrl }: ImageBlobProps) => {
  if (!blobUrl) {
    return null;
  }

  return (
    <Image src={blobUrl} alt="Generated quote card" width={150} height={100} />
  );
};

export default ImageBlob;
