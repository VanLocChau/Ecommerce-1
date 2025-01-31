import { Grid } from '@radix-ui/themes'
import CustomerStatistic from './BarAnalytic/CustomerStatistic'
import OrderStatistic from './BarAnalytic/OrderStatistic'
import ProductStatistic from './BarAnalytic/ProductStatistic'
import TakingStatistic from './BarAnalytic/TakingStatistic'
import Top10Product from './BarAnalytic/Top10Product'
import ProductRate from './PieAnalytic/ProductRate'
import ProductView from './LineAnalytic/ProductView'

const Analytic = () => {
    return (
        <div className='space-y-5'>
            <Grid columns={'4'} gap={'5'}>
                <TakingStatistic />
                <OrderStatistic />
                <ProductStatistic />
                <CustomerStatistic />
            </Grid>
            <Grid columns={'3'} gapX={'5'}>
                <Top10Product />
                <ProductRate />
                <ProductView />
            </Grid>
        </div>
    )
}

export default Analytic
