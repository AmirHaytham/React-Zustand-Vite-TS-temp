import { useForm } from 'react-hook-form';
import { useStore } from '../../store/useStore';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export function LeadForm() {
  const { register, handleSubmit, reset } = useForm<LeadFormData>();
  const addLead = useStore((state) => state.addLead);

  const onSubmit = (data: LeadFormData) => {
    addLead({
      ...data,
      status: 'new',
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className="input mt-1"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
          className="input mt-1"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="input mt-1"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className="input mt-1"
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary w-full">
          Add Lead
        </button>
      </div>
    </form>
  );
}
