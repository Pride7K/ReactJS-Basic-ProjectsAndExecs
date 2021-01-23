import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallBackButtons from './useCallBackButtons';



const UseCallback = (props) => {
    const [counter, setCounter] = useState(0);

    const inc = useCallback(function (delta) {
        setCounter(current => current + delta)
    },[setCounter])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <span className="text">{counter}</span>
                <UseCallBackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default React.memo(UseCallback)
