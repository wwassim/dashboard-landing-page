"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
const items = [
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

const FAQ = () => {
  return (
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="flex flex-col  w-full py-[24px] lg:py-[60px] lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px] ">
          <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
            Let’s clarify some of your questions
          </h3>
          <h1 className="text-[#172026] py-4 text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
            Lets clarify some of your questions
          </h1>
          <p className="text-[18px] text-[#36485C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
        </div>
        <div className="lg:w-2/3">
          <Accordion.Root
            type="single"
            defaultValue="item-1"
            collapsible
            className="flex flex-col gap-y-4"
          >
            {items.map((item, i) => (
              <div className="" key={i}>
                <Accordion.Item
                  value={`item-${i + 1}`}
                  className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between">
                      <p className="text-left font-medium text-[#172026]">
                        {item.question}
                      </p>
                      <span>
                        <Image
                          src={Plus}
                          alt="see more"
                          className="h-10 w-10 lg:h-6 lg:w-6"
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className="pt-2 text-[#36485C]">{item.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
