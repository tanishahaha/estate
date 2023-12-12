import { getLatestListings, searchListings } from "@/lib/axios";
import { Item } from "@/type/item";
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import AssetModal from "./AssetModal";
import AssetImage from "./AssetImage";
import Toast from "./Toast";
import Timeline from "./Timeline";
import common from './StylesCommon.module.css';

export default function HomeListings() {
  const [listings, setListings] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const [showModalItem, setShowModalItem] = useState<Item | undefined>(
    undefined
  );

  useEffect(() => {
    async function load() {
      setLoading(true);
      let data = await getLatestListings();
      setListings(data);
      setLoading(false);
    }
    load();
  }, []);

  const redirectToKonma = () => {
    window.location.href = 'https://konmaestateledger.netlify.app/';
  };

  return (
    <>
      <AssetModal
        showModalItem={showModalItem}
        setShowModalItem={setShowModalItem}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <Search
            loading={loading}
            setLoading={setLoading}
            setListings={setListings}
          />

          <div className={common['divtext']}>
            <h1>How it works</h1>
          </div>
          <Timeline />

          <div className={common['divbutton']}>
          <button onClick={redirectToKonma} className={common['cssbuttons-io-button']}>
  Explore Marketplace
  <div className={common['icon']}>
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
          </div>


          

          {loading ? (
            <div className="flex flex-row justify-left items-center">
              
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {listings.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setShowModalItem(item);
                  }}
                >
                  <div className="group">
                    
                    
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Search({ loading, setLoading, setListings }) {
  const [userQuery, setUserQuery] = useState<string>("");

  useEffect(() => {
    setUserQuery("");
  }, []);

  async function search() {
    if (!loading && userQuery.length) {
      setLoading(true);
      let res = await searchListings(userQuery);
      setListings(res);
      setLoading(false);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      search();
    }
  }

  return (
    <div className="mx-8 my-20">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          
        </div>
        
        
      </div>
    </div>
  );
}
