import React, { useRef, useEffect } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';

const DamageModal = ({ isOpen, onClose }) => {
    const ref = useRef();

    // 클릭 외부 시 모달 닫기
    useOnClickOutside(ref, onClose);

    useEffect(() => {
        // ref.current의 값이 변경될 때마다 로그를 출력
        console.log(ref.current);
    }, [ref.current]);

    return (
        <div className='flex items-center justify-center z-40 fixed left-0 bottom-0 w-full h-full bg-gray-800'>
            <div className='modal bg-white rounded-lg w-1/2'>
                {/* modal창 부분 */}
                <div ref={ref} className='flex flex-col items-start p-4'>
                    <div className='flex items-center w-full justify-between'>
                        <div className='text-gray-900 font-medium text-lg'>
                            데미지 관계
                        </div>
                        <span className='text-gray-900 font-medium text-lg cursor-pointer'>
                            DamageRelationship
                        </span>
                    </div>
                    <button
                        onClick={onClose} // 모달 닫기 버튼
                        className='mt-4 bg-red-500 px-4 py-2 rounded-lg text-white'>
                        모달 닫기
                    </button>
                </div> 
            </div>
        </div>
    );
}

export default DamageModal;
