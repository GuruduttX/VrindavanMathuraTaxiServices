"use client"
import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/SupabaseConfig';
import toast from 'react-hot-toast';
import PackageDetails from '@/components/Admin/PackageEditor/PackageDetails';
import TripHighlights from '@/components/Admin/PackageEditor/TripHighlights';
import Inclusion from '@/components/Admin/PackageEditor/Inclusion';
import Exclusion from '@/components/Admin/PackageEditor/Exclusion';
import CMSSchema from '@/components/Admin/CMS/CMSSchema';
import SelectedInclusion from '@/components/Admin/PackageEditor/SelectedInclusion';



type CarForm = {
  title: string;
  category: string,
  price: string,
  duration: string,
  image : string
  alt : string

}

type Inclusions = {
  id: string
  description: string
}

type Exclusions = {
  id: string
  description: string
}







export default function CreateNewPackage() {

  const [form, setForm] = useState<CarForm>({
    title: "",
    category: "",
    price: "",
    image : "",
    alt : ""
  });

  
  const [inclusions, setInclusions] = useState<Inclusions[]>([{id : crypto.randomUUID() , description : ""}]);
  const [exclusions, setExclusions] = useState<Exclusions[]>([{id : crypto.randomUUID() , description : ""}]);
  


  const updateForm = (field: keyof CarForm, value: string) => {
    setForm((prev) => {
      return { ...prev, [field]: value }
    })

  }

  const handleSave = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // browser validation check
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    if (!form.image) {
      toast.error("Package image is missing");
      return;
    };

    if (!form.category) {
      toast.error("Package category is missing");
      return;
    }

   
    const payload = {

      title: form.title,
      category: form.category,
      price: form.price,
      inclusions,
      exclusions,
      
    };

    const { data, error } = await supabase
      .from("Car")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Car Published Successfully");

  };


  

  return (
    <div className="max-w-6xl mx-auto p-8 rounded-2xl
      bg-gradient-to-br from-[#0b1220]/80 via-[#0e1a2f]/80 to-[#0a1020]/80
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

      <form className='space-y-6' onSubmit={handleSave}>
        <CMSHeader editorType="Car" />
        <Inclusion inclusions={inclusions} setInclusions={setInclusions} editorType='Package' />
        <Exclusion exclusions={exclusions} setExclusions={setExclusions} editorType='Package' />
        <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Package" />
        
      </form>

    </div>

  );
}
