import { Flex, IconButton, Select, Text } from '@radix-ui/themes'
import { useRef } from 'react'
import { Bar, BarChart, Rectangle, Tooltip } from 'recharts'

const TakingStatistic = () => {
    const widthRef = useRef<null | HTMLDivElement>(null)
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 4400
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 6398
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 8398
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 5800
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908
        }
    ]
    return (
        <div className='bg-white p-[16px] rounded-8 border-border/20 border shadow-sm space-y-3' ref={widthRef}>
            <Flex justify={'between'} align={'center'}>
                <Flex align={'center'} gapX={'4'}>
                    <IconButton variant='soft'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 stroke-2'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                            />
                        </svg>
                    </IconButton>
                    <Text weight={'medium'} size={'4'}>
                        Doanh Thu
                    </Text>
                </Flex>
                <Select.Root defaultValue='day' size={'2'}>
                    <Select.Trigger />
                    <Select.Content>
                        <Select.Item value='day'>Day</Select.Item>
                        <Select.Item value='month'>Month</Select.Item>
                        <Select.Item value='year'>Year</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Flex>
            <Flex className='rounded-8 bg-gray-100 p-12 w-full' justify={'between'}>
                <BarChart
                    width={widthRef.current ? ((widthRef.current.offsetWidth - 32) / 3) * 2 : 300}
                    height={80}
                    data={data}
                    className='flex-shrink-0 basis-2/3'
                >
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Bar dataKey='pv' fill='#1677ff' barSize={30} shape={<Rectangle radius={6} />} />
                </BarChart>
                <Flex direction={'column'} justify={'center'} align={'center'} className='basis-1/3 flex-shrink-0'>
                    <Text weight={'medium'} size={'4'}>
                        +10tr
                    </Text>
                    <Text weight={'medium'} size={'3'} color='blue' className='flex items-center space-x-1'>
                        <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
                                fill='currentColor'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                        <span>110%</span>
                    </Text>
                </Flex>
            </Flex>
        </div>
    )
}

export default TakingStatistic
