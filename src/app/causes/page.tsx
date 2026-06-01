import Causes from "@/components/sections/Causes";
import PageHeader from "@/components/sections/PageHeader";
import { Heart } from "lucide-react";

const CausesPage = () => {
  return (
    <main className="bg-white">
      <PageHeader
        title="Our Causes"
        subTitle="Focusing on the most critical needs of our children to ensure they grow up healthy, educated, and loved."
      />

      {/* Reuse the Causes section but maybe with more detail if needed */}
      <div className="py-12">
        <Causes />
      </div>

      {/* Additional Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="bg-tertiary p-6 rounded-3xl text-secondary">
                <Heart className="h-12 w-12" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">
                  Why Your Support Matters
                </h2>
                <p className="text-gray-600 mt-2">
                  Every naira donated is put to work immediately.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
              <p>
                At Yahweh Run Orphanage, we operate with full transparency. Our
                causes are carefully selected based on the immediate and
                long-term needs of the children in our care. From providing a
                stable roof over their heads to ensuring they have the best
                possible education.
              </p>
              <p>
                We believe that every child has the potential to become a
                leader, an innovator, or a professional if given the right
                foundation. Your support provides that foundation. Join us in
                our mission to break the cycle of poverty and abandonment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CausesPage;
