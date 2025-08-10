
export const titleToSlug = (title:string)=>{
    return title.toLowerCase()
    .replace(/[^\w\s-]/g, '') // លុបតួអក្សរពិសេស
    .replace(/[\s_]+/g, '-') // ជំនួស space និង underscore ដោយ hyphen
    .trim()
    .replace(/^-+|-+$/g, ''); // លុប hyphen ដែលនៅខាងមុខឬខាងក្រោយ
}