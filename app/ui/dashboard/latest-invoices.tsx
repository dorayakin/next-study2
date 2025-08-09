import {fetchLatestInvoices} from '@/app/lib/data';
import {LatestInvoicesPresentation} from './latest-invoices-presentation';


export default async function LatestInvoices() { // Remove props
    const latestInvoices = await fetchLatestInvoices();
    return <LatestInvoicesPresentation latestInvoices={latestInvoices}></LatestInvoicesPresentation>
}