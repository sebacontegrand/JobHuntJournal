
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AuthRoute } from '../auth/routes/AuthRoute'

import { CheckingAuth } from '../ui/components/CheckingAuth'


import { useCheckAuth } from '../hooks/useCheckAuth'

export const AppRouter = () => {
    const { status } = useCheckAuth()
    if (status === 'Checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>
            {(status === 'Authenticated')
                ? <Route path="/*" element={<JournalRoutes />} />
                : <Route path="auth/*" element={<AuthRoute />} />
            }
            <Route path="/*" element={<Navigate to="/auth/login" />} />




        </Routes>
    )
}
