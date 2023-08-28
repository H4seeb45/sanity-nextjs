import { BiBriefcase } from "react-icons/bi";

const job = {
    name: "job",
    title: "Job",
    type: "document",
    icon: BiBriefcase,
    fields: [
        {
            name: "name",
            title: "Company Name",
            type: "string",
            description: "What is the name of the company?",
        },
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
            description: "Enter the job title. E.g: Software Developer",
        },
        {
            name: "logo",
            title: "Company Logo",
            type: "image",
        },
        {
            name: "url",
            title: "Company Website",
            type: "url",
        },
        {
            name: "description",
            title: "Job Description",
            type: "array",
            description: "Write a brief description about this role",
            of: [{ type: "block" }],
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
        },
    ],
};

export default job;
