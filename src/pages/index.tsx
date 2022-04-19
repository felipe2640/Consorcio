import { GetStaticProps } from "next";
import React from "react";
import { Companys } from "../interface"
import companyArray from "../components/company"
import CompanyCard from "../components/CompanyCard"


type Props = {
    items: Companys[]
}

const books = ({ items }: Props) => {

    return (
        <>

            <div className='container-fluid'>
                <CompanyCard key={items.toString()}  items={items} />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const items: Array<Companys> = companyArray;
    return { props: { items } }
}

export default books;