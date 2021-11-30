import { Action } from "context/constant";
import { useJobSearch } from "hook/useJobSearch";

const FilterTags = () => {
  const { tags, dispatch } = useJobSearch();
  return (
    <>
      {tags.length > 0 && (
        <div className="flex justify-between items-center w-full rounded-xl py-4 px-4 bg-white font-bold shadow-md ">
          {/*-- Tags --*/}
          <div className="flex flex-wrap item-center justify-start text-pri-clr-100 w-full">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="flex my-2 bg-clr-110 rounded-md text-xs mr-4 tracking-wider overflow-hidden"
              >
                <h3 className="py-2 px-2">{tag}</h3>

                <button
                  onClick={() =>
                    dispatch({ type: Action.removeFilter, payload: { tag } })
                  }
                  className="bg-pri-clr-100 px-2 focus:bg-clr-130 lg:hover:bg-clr-130"
                >
                  <img src="/images/icon-remove.svg" alt="remove" />
                  <span className="sr-only">remove</span>
                </button>
              </div>
            ))}
          </div>

          {/*-- Clear Button --*/}
          <button
            className="text-clr-120 px-2 text-fs-700 lg:hover:underline lg:hover:text-pri-clr-100"
            onClick={() => dispatch({ type: Action.clearAll })}
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export { FilterTags };
