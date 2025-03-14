import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Skills = () => {
  return (
    <div className="w-11/12 mx-auto pb-10 py-10">
      <p className="text-4xl font-bold text-center">Skills</p>
      <div>
        <div>
          <Tabs>
            <TabList className="text-center py-10 flex justify-center items-center gap-10">
              <Tab className="text-xl px-1 font-semibold">Frontend</Tab>
              <Tab className="text-xl px-1 font-semibold">Backend</Tab>
              <Tab className="text-xl px-1 font-semibold">Database</Tab>
              <Tab className="text-xl px-1 font-semibold">Cloud</Tab>
              <Tab className="text-xl px-1 font-semibold">Libaries</Tab>
              <Tab className="text-xl px-1 font-semibold">Tools</Tab>
            </TabList>

            <TabPanel>
              <div className="flex items-center justify-center gap-10 py-10">
                <img className="w-20" src="/src/assets/icon/html.png" alt="" />
                <img className="w-20" src="/src/assets/icon/cssd.png" alt="" />
                <img
                  className="w-20"
                  src="/src/assets/icon/talwindcss.png"
                  alt=""
                />
                <img className="w-20" src="/src/assets/icon/jsss.png" alt="" />
                <img className="w-20" src="/src/assets/icon/mona.png" alt="" />
                <img
                  className="w-20"
                  src="/src/assets/icon/firebase.png"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center justify-center gap-10 py-10">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"
                  alt=""
                />
                <img className="w-20" src="/src/assets/icon/node.png" alt="" />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=21888&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center justify-center gap-10 py-10">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=gKfcEStXI1Hm&format=png&color=000000"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center justify-center gap-10 py-10">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=sBo1RJ3rjbje&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="/src/assets/icon/vercelss.png"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center justify-center gap-10 py-10">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=cwhLAZV7PdD9&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=5EGKW74AhZ6U&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center justify-center gap-10 py-10">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=100&id=ezj3zaVtImPg&format=png&color=000000"
                  alt=""
                />
                <img
                  className="w-20"
                  src="/src/assets/icon/postman.png"
                  alt=""
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Skills;
