import { MainLayout } from "./components/MainLayout/MainLayout";
import { ContentLayout } from "./components/ContentLayout/ContentLayout";
import { SectionTitle } from "@components/SectionTitle/SectionTitle";
import { Experience } from "@components/Experience/Experience";
import { Education } from "@components/Education/Education";
import { Section } from "@components/Section/Section";
import { Header } from "@components/Header/Header";
import { CodeList } from "@components/CodeList/CodeList";
import { ArticleList } from "@components/ArticleList/ArticleList";
import { sprinkles } from "style/sprinkles.css";
import { useTranslation } from "react-i18next";
import { useHashScroll } from "hooks/useHashScroll";

export const App = () => {
  const { t } = useTranslation();
  useHashScroll();

  return (
    <MainLayout>
      <ContentLayout>
        <Header />
        <div
          className={sprinkles({
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            marginTop: "32px",
          })}
        >
          <Section>
            <SectionTitle id="about-me" title={t("aboutMe")} />
            {t("aboutMeDescription1")}
            <br />
            <br />
            {t("aboutMeDescription2")}
          </Section>

          <Section>
            <SectionTitle id="experience" title={t("experience")} />
            <Experience />
          </Section>
          <Section>
            <SectionTitle id="education" title={t("education")} />
            <Education />
          </Section>
          <Section>
            <SectionTitle id="code" title={t("codeExamples")} />
            <CodeList />
          </Section>
          <Section>
            <SectionTitle id="blog-posts" title={t("blogPosts")} />
            <ArticleList />
          </Section>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
