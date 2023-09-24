import Image from "next/image";
import React from "react";

import Button from "@/components/common/button";
import Label from "@/components/common/label";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <Layout>
      Ini Halaman Contact
      <Button className={"bg-blue-300 px-4 py-2 rounded-lg"}>
        Halo Button
      </Button>
      <Label htmlFor="email">Ini Label</Label>
      <div className="bg-white">
        <Image src="/vercel.svg" alt="ini gambar vercel" width="100" height="100"/>
      </div>
    </Layout>
  );
};

export default Contact;
