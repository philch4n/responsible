
export function UserImage({ userImage, imageType }) {
	return (
		{
			imageType === 'profile' ?
				<img src={ userImage /*  portrait size */ } /> :
				<img src={ userImage /*  icon size  */ } />
		}
	);
};
