export const cn = (...classes) => {
    return classes
        .filter(Boolean)
        .map(cls => {
            if (typeof cls === 'string') return cls;
            if (Array.isArray(cls)) return cls.filter(Boolean).join(' ');
            if (typeof cls === 'object') {
                return Object.entries(cls)
                    .filter(([_, value]) => value)
                    .map(([key]) => key)
                    .join(' ');
            }
            return '';
        })
        .filter(Boolean)
        .join(' ');
};


