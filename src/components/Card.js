import React from 'react';
import ReactTimeAgo from 'react-time-ago'

const Card = (props) => {
    console.log(props);
    return (
        <a href={props.url}>
            <div className="lg:flex p-4 px-5 w-full">
                <div className="border-r border-b border-l border-grey-light lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                    <p className="text-black leading-none">By {props?.author}</p>
                    <div className="mb-8">
                        <div className="text-black font-bold text-xl mb-2">{props?.title}</div>
                        <p className="text-grey-darker text-base">{props?.subtitle}</p>
                    </div>
                    <div className="flex items-center">
                    <div className="text-sm flex flex-row">
                        <div>
                            <p className="text-grey-dark">{<ReactTimeAgo date={props?.latestPublishedAt} locale="en-US"/>}</p>
                        </div>
                        <div className="px-7">Claps: {props?.clapCount}</div>
                    </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card;