export default function HeaderNavItem({ name, onClick, icon }) {
    return (
        <div onClick={onClick} className='cursor-pointer text-xl flex flex-row justify-center gap-1.5 items-center content-center'>{icon}{name}</div>
    );
}