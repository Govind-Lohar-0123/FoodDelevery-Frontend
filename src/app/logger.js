export default function logger(store){
    return function(next){
        return function(action){
            return next(action);
        }
    }
}