"use client";

export default function BlogContentSection({content} : {content : string}) {
  return (
    <section className="w-full bg-white">

      {/*
       <div className="flex items-center gap-4 pb-6 border-b border-gray-200 mb-3">

        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-300 shadow-sm ">
          <img
            src="/images/author.jpg"
            alt="Rohit Juyal"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Rohit Juyal
          </p>

          <p className="text-xs text-gray-500">
            March 18, 2025 • Travel Guide • 5 min read
          </p>
        </div>

        </div> */
        }

      <article className="space-y-8 text-gray-700 leading-relaxed">

        <div className="BlogContent
                    prose prose-slate max-w-none
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:my-1
                    prose-li:marker:text-slate-500
                    prose-p:leading-7
                    "
                    dangerouslySetInnerHTML={{ __html: content ?? "" }}
                />

      </article>
    </section>
  );
}
