import map from 'lodash/map'
import size from 'lodash/size'
import cx from 'classnames'
import useToggle from 'hooks/useToggle'

const LineItem = ({ item }) => {
    const [isExpanded, toggle] = useToggle()

    return (
        <div className="">
            <div className="px-8 py-3 flex justify-between items-center hover:bg-gray-200">
                {item.label}
                {size(item.children) > 0 && (
                    <img
                        src="/icons/dropdown.svg"
                        alt="dropdown"
                        className={cx('cursor-pointer', {
                            'transform rotate-180': isExpanded,
                        })}
                        onClick={toggle}
                    />
                )}
            </div>
            {isExpanded && (
                <div className="px-8">
                    <div className="border-l-2 border-gray-200">
                        {map(item.children, (c) => (
                            <div className="pl-5 py-2 hover:bg-gray-200">{c.label}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

const Navigation = ({ folders }) => {
    return (
        <>
            <p className="px-8 pt-8 pb-3 text-gray-400 uppercase font-bold">root</p>
            {map(folders, (f) => (
                <LineItem item={f} />
            ))}
        </>
    )
}

export default Navigation