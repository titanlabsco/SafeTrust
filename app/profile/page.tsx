'use client';
import React, { useEffect } from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/profile/Sidebar';
import ProfilePicture from '@/components/profile/ProfilePicture';
import ProfileForm from '@/components/profile/ProfileForm';
import AccountOverview from '@/components/profile/AccountOverview';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@/store/userStore';
import { useQuery } from '@apollo/client';
import { GET_USER } from '@/graphql/queries/getUser.graphql';
import LoadingSkeleton from '@/components/profile/LoadingSkeleton';
const Home: React.FC = () => {
  const { user, setUser, setUserWallets, setLoading, setError, loading } =
    useUserStore();

  const { t } = useTranslation();

  //fetch profile with graphql query. handle error and loading state.
  // const { data, loading, error } = useQuery(GET_USER, {
  //   variables: { id: user?.id }, //how do we get user_id from auth?
  // });

  // useEffect(() => {
  //   if (data) {
  //     setUser(data.users[0]);
  //     setUserWallets(data.user_wallets);
  //   }
  //   if (loading) {
  //     setLoading(true);
  //   }
  //   if (error) {
  //     setError(error.message);
  //   }
  // }, [data, loading, error]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col dark:bg-dark-background">
      <Header />
      <div className="bg-white dark:bg-dark-surface2 shadow-lg dark:shadow-gray-900 rounded-lg p-8 w-full max-w-5xl mx-auto mt-8 flex h-full">
        <Sidebar />
        <div className="w-3/4 pl-8 overflow-hidden">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div>
              <h1 className="text-2xl font-semibold mb-6 text-black dark:text-gray-200">
                {t('profile.title')}
              </h1>
              <div className="flex items-center gap-6 mb-6">
                <ProfilePicture />
                <textarea
                  placeholder={t('profile.summaryHolder')}
                  defaultValue={
                    user?.summary ||
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  }
                  className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 w-full text-gray-900 dark:text-dark-primary bg-white dark:bg-dark-surface placeholder-gray-500 dark:placeholder-gray-400"
                  rows={3}
                />
              </div>
              <ProfileForm />
              <AccountOverview />
              <div className="text-right">
                <button className="bg-default-color text-white px-4 py-2 rounded-lg hover:bg-default-color transition-colors">
                  {t('profile.overView.saveBtn')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
