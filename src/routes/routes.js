import Home from "../pages/Home";
import About from "../pages/About";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";

export const DefaultPage = Home

export const PAGES = {
    'HOME': 'home',
    'ABOUT': 'about',
    'QUESTION1': 'question1',
    'QUESTION2': 'question2',
    'NOT_FOUND_PAGE': '/',
}
export default {
    [PAGES.NOT_FOUND_PAGE]: Home,
    [PAGES.HOME]: Home,
    [PAGES.ABOUT]: About,
    [PAGES.QUESTION1]: Question1,
    [PAGES.QUESTION2]: Question2,
}