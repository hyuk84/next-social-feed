import Image from 'next/image';
import { Header } from '@/app/shared/ui/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav className="space-y-1 sticky top-24">
              <a
                className="flex items-center gap-4 px-4 py-3 bg-primary/10 text-primary rounded-xl font-semibold"
                href="#"
              >
                <span className="material-symbols-outlined filled-icon">
                  home
                </span>
                <span>Home</span>
              </a>
              <a
                className="flex items-center gap-4 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors font-medium text-slate-600 dark:text-slate-400"
                href="#"
              >
                <span className="material-symbols-outlined">explore</span>
                <span>Explore</span>
              </a>
              <a
                className="flex items-center gap-4 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors font-medium text-slate-600 dark:text-slate-400"
                href="#"
              >
                <span className="material-symbols-outlined">notifications</span>
                <span>Notifications</span>
              </a>
              <a
                className="flex items-center gap-4 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors font-medium text-slate-600 dark:text-slate-400"
                href="#"
              >
                <span className="material-symbols-outlined">person</span>
                <span>Profile</span>
              </a>
              <a
                className="flex items-center gap-4 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors font-medium text-slate-600 dark:text-slate-400"
                href="#"
              >
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
              </a>
              <div className="pt-6">
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  Create New Post
                </button>
              </div>
            </nav>
          </aside>
          <section className="flex-1 max-w-2xl mx-auto w-full space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Small user avatar for input field"
                    width={48}
                    height={48}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfu59MeErmVw2txDh2lp2ODYgSCJS_KrakH3QnNcqoAyu6xp8XQEPrDTWiUhBh7XFviiRqVAbwitZheHNWJQmwLxA3tkK_o68NAbEH14Q__h7gBdw0gF7gMbSi9tkOmGmijCoq0c_NhWR0dHKFzAkUfUwxCaLeegd5B95odjxcs0Znp6eIwKNOyaPOSEtFgwRrgxLTu0Dq3bYLdzZQgfH-O3JH7JPaCKBzRAEdHPAls8dMKNDbsC55RSKtPJlm_vSJsaFtI2aMbo4n"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    className="w-full border-none focus:ring-0 text-lg bg-transparent resize-none placeholder:text-slate-400 py-2"
                    placeholder="What's happening?"
                    rows={2}
                  ></textarea>
                  <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-3"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined">image</span>
                      </button>
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined">
                          videocam
                        </span>
                      </button>
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined">poll</span>
                      </button>
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined">
                          sentiment_satisfied
                        </span>
                      </button>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded-full font-bold text-sm disabled:opacity-50">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <article className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      alt="Profile picture of Sarah Johnson"
                      width={40}
                      height={40}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv-s2PE-zhMdNhLNtde8cPk4FElGawRq03Z1YDn1g6iTbKQio6XsE3vKxkR-EROuqTy5egNJO4Zlf-9drDn3DKOiXzPp-T0-9o1-d67m5DjeuhK0LDOtS6CxK9UMczd0zsx55BHEoM-eQJftk_Kmo9cjEcxlxO_2hWazaQwdwYwWSs8x7ffBjjc_KDz_nhaxYfJTCPKrkbIUW00nR9fbS62-GVwo0rzM3uEMLmZaBNYyviz5Y0NwZNOR0SSwDf2bkBUGZAX-vaWuj1"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Sarah Johnson</h3>
                    <p className="text-xs text-slate-500">@sarahj • 2h ago</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                  Finally visited the Swiss Alps! The view from the top is
                  absolutely breathtaking. Nature never fails to amaze me. 🏔️✨
                </p>
              </div>
              <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800">
                <Image
                  className="w-full h-full object-cover"
                  width={606}
                  height={340}
                  alt="Panoramic view of snow-capped Swiss mountains"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNCjNCM3oSVHaFnxJAaC1JL3hnEPImFoA37dIx7eBq4EWvlXfxJz-Icb5KFnkQjKJvh4dfs16U5faIRPn1ZVFcd_BkDbqV8wucrPs55nU1rwmgvjtO8g3qhKngRlD8w2SFx82ghR-3t7x_AkfOjeTeIt5KV0D8XYyQsPvhmDbPEz6LFvS49E3XlQeFXthLU8Bn1L4pNQaZBbYILFWkLO-utK6pUK37rOaKJU-ooh7dPfzOP8UVH_9AvwHut14s8vwIbJcDyR_wd5pa"
                />
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-xl group-hover:filled-icon">
                      favorite
                    </span>
                    <span className="text-sm font-medium">1.2k</span>
                  </button>
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      chat_bubble
                    </span>
                    <span className="text-sm font-medium">84</span>
                  </button>
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-green-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      share
                    </span>
                    <span className="text-sm font-medium">12</span>
                  </button>
                </div>
                <button className="text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </article>
            <article className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                      alt="Profile picture of Alex Chen"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYh9mJ5LcRT2dxITzF6IFD-vAFM0WwWJwI2lhbiz0DRfTMZFgQDT_5EGlUg0ewwiynbRocjef6NX9Wk8PFK3EE4-SqmLst7Hzk0OerFy2TS7g1_d-8jCdabsWxYs8_QwbYkmM51lb6epgViF1Wm-UKTQboKHn63Gkeh2Oq_67qyE7pwXDXiF_pErZWl3y30AjGqQUujZ1Giz6N-OKiG-LjEhoqMvRLEHP_3k5B6CkKDVo7pw084H2pxhtW3B3Q-tiJ_p0p-fvvBLlI"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Alex Chen</h3>
                    <p className="text-xs text-slate-500">
                      @alexc_tech • 5h ago
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-3">
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                  Quick demo of the new workspace setup. Clean cables, better
                  productivity! #WorkFromHome #Setup
                </p>
              </div>
              <div className="relative aspect-video bg-black group cursor-pointer">
                <Image
                  className="w-full h-full object-cover opacity-60"
                  width={606}
                  height={340}
                  alt="Modern desk setup with multiple monitors and keyboard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Jvvng3NNr0PN1MGIA71DTzI4NOK6aJItkzhGZMsuthakAOy5PMn4Efne0gE7rk_Ht6chsIulpiUfUaLPYT0BIul4rQvgWzDq0DmXDmfTK_NvBUbBudesIzj3IJD1s1zuP1akTx3rOfd1-6Ay8_ExIdFwHe3Nt0MkaonwtLyt83UoPtk-lzGflh1DV9G_XMhLKVrAMVAE-M2FNMmX4TJ9Z8qiXeAkmh5Sz2qyjl48sx2GWz1WJJ8hEdO67HRuBtrOLCRGuIIwKdfQ"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-4xl filled-icon">
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-primary"></div>
                  </div>
                  <span className="text-white text-xs font-medium">
                    0:45 / 2:15
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      favorite
                    </span>
                    <span className="text-sm font-medium">942</span>
                  </button>
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      chat_bubble
                    </span>
                    <span className="text-sm font-medium">128</span>
                  </button>
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-green-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      share
                    </span>
                    <span className="text-sm font-medium">45</span>
                  </button>
                </div>
                <button className="text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </article>
            <article className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                      alt="Profile picture of Marcus Thorne"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKe6_9ZU37hicXhIxnrB7CaFaDzYGaqWWzUEmhwgcfLC2C_9ospXo5ZJOjmnsKqjahNFX_BiunlcW01bhoxtfeMxFzlPfk7lQjBesEyNcYF0Mk6sp03QQSAff4feXZ6z2XnFT7u6Hl_brMR0_avQf0r6dDBJ7h8q7lyC1zaqfeRs_SjtOc4158LgPQnFjrA55AeqALmq6ZjD1rvma088dOpxtIpiP1R9P9GHni8muUGlbBfvFDGYy3mh-oaF4HhSw7aBfXugqKqo9J"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Marcus Thorne</h3>
                    <p className="text-xs text-slate-500">@m_thorne • 8h ago</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="px-4 pb-6">
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-lg">
                  Software engineering is 10% writing code and 90% understanding
                  why the code you just wrote isn't working the way you thought
                  it would.
                  <br />
                  <br />
                  It's a constant cycle of learning and unlearning. Never stop
                  being curious! 🚀
                </p>
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      favorite
                    </span>
                    <span className="text-sm font-medium">2.5k</span>
                  </button>
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      chat_bubble
                    </span>
                    <span className="text-sm font-medium">312</span>
                  </button>
                  <button className="flex items-center gap-2 group text-slate-500 hover:text-green-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      share
                    </span>
                    <span className="text-sm font-medium">186</span>
                  </button>
                </div>
                <button className="text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </article>
          </section>
          <aside className="hidden xl:block w-80 space-y-6 flex-shrink-0">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
              <h2 className="font-bold text-lg mb-4">Trending for you</h2>
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <p className="text-xs text-slate-500">
                    Trending in Technology
                  </p>
                  <p className="font-bold text-sm group-hover:text-primary transition-colors">
                    #Web3Development
                  </p>
                  <p className="text-xs text-slate-500">12.4k posts</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-xs text-slate-500">
                    Trending in World News
                  </p>
                  <p className="font-bold text-sm group-hover:text-primary transition-colors">
                    SustainableEnergy
                  </p>
                  <p className="text-xs text-slate-500">85.1k posts</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-xs text-slate-500">
                    Trending in Lifestyle
                  </p>
                  <p className="font-bold text-sm group-hover:text-primary transition-colors">
                    #MinimalismChallenge
                  </p>
                  <p className="text-xs text-slate-500">5.2k posts</p>
                </div>
              </div>
              <button className="mt-4 text-sm font-semibold text-primary hover:underline">
                Show more
              </button>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm sticky top-24">
              <h2 className="font-bold text-lg mb-4">Suggested Users</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        className="w-full h-full object-cover"
                        alt="Portrait of suggested user Robert Fox"
                        width={40}
                        height={40}
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6V9fGljUHFGAhuhQTp5D418FAXw61f0ZUH82-vh_kG3RgiLK67SpRRKZAY3IcWQew7LEvDYPic4FN-nYEwuMZR4EijZnpKRryBDSlKM2DPzsrIMqZ4lT2PbPKvtsBgRgtRsbCthNoNUsTmOI64rM6uOrKXnsxT13tQ-9Gqw1-AXc9qgNqdqj7sf1gaJ5PcQE2HvZ-ei5pUbOtoq38our9Ek_gm_HfMCZTqpv1smoqS6W1-_00EQ4phHrdBN7ZUZtmT26vpgdcYjt"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-none">
                        Robert Fox
                      </h3>
                      <p className="text-xs text-slate-500">@robert_f</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        className="w-full h-full object-cover"
                        width={40}
                        height={40}
                        alt="Portrait of suggested user Jane Cooper"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7B2huQ2EgIC5gRKCnI4Z07EufUQ-Cs_WHToviPybBXRIKNC6H7cpDxZXMcZii8-IKO9ZFoMPcjQvFy7vcFFiU3lsYtv7TEo1vklVWkAG2JgN0MOzjrnGNvsOUpQSEsDsjQCCYbpvWjeVGX_2R012iZn4HU8dTdnlXtI8M-EJmJeWexgMOc-AfrPwiLVffeib1MKVdAs02MsqcdcNLomaQ85FcNRz8IxJG1Zg1KlDUChOabOj2YDyeFjVcY0btKUWC6L_g2bnZY5S"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-none">
                        Jane Cooper
                      </h3>
                      <p className="text-xs text-slate-500">@jane_c</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        className="w-full h-full object-cover"
                        width={40}
                        height={40}
                        alt="Portrait of suggested user Emily Blunt"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEUAwSol6oLEIbGG6bqOZL7O2cpkuLbQ1iw2D_5yb-bxyueufDl62rpg4ead1I97AgEecqPsZfZR60uehHBpCp3HxknfegrcvNRLgeh-zAnPBC9wd6M9krvBbm0kl4YclQ-7GPMiNhPjBT81tlssCjmGPtEoI5K5E6k8v_JNRtpUdhNWVV2B0gKR-ftfG_KvgwLwv1wSerbNaIf6I0cmTFHrfVL7dCqXjRY4UOcdImkOwYE017sKKTBRmLHDuz-9g9ew9VFSFohvRi"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-none">
                        Emily Blunt
                      </h3>
                      <p className="text-xs text-slate-500">@emily_b</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                </div>
              </div>
              <button className="mt-4 text-sm font-semibold text-primary hover:underline">
                View all suggestions
              </button>
            </div>
            <footer className="px-4 text-xs text-slate-400 space-x-2">
              <a className="hover:underline" href="#">
                Privacy Policy
              </a>
              <span>•</span>
              <a className="hover:underline" href="#">
                Terms of Service
              </a>
              <span>•</span>
              <a className="hover:underline" href="#">
                Cookie Policy
              </a>
              <div className="mt-2 text-slate-500">
                © 2024 SocialSphere Inc.
              </div>
            </footer>
          </aside>
        </div>
      </main>
    </>
  );
}
